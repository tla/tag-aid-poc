#!/usr/bin/env python3

import argparse
import json
import os
import requests
import subprocess
import sys
from requests.auth import HTTPBasicAuth

def collect_tradition_data(options, auth=None):
    '''Iterate through the given tradition, saving an SVG  for each section into the necessary output directory.'''
    baseurl = "%s/tradition/%s" % (options.repository, options.tradition_id)
    r = requests.get("%s/sections" % baseurl, auth=auth)
    r.raise_for_status()

    # We should put the data in ../public/data relative to this script
    outdir = "%s/../public/data" % os.path.abspath(os.path.dirname(sys.argv[0]))

    sectionlist = []
    for sect in r.json():
        ## See if there is lemma text
        url = "%s/section/%s/lemmatext" % (baseurl, sect.get('id'))
        r = requests.get(url, auth=auth)
        r.raise_for_status()
        answer = r.json()
        if answer.get('text', '') != '':
            if (options.verbose):
                print("Collecting data for section %s" % sect.get('name'))
           # sectionlist.append(sect)
            collect_section_data(options, sect, outdir, auth=auth)
   #sectfile = outdir + '/sections.json'
  #with open(sectfile, 'w', encoding='utf-8') as sf:
     #  json.dump(sectionlist, sf)


def collect_section_data(options, section, outdir, auth=None):
    # Make sure the requested directory exists
    sectiondir = "%s/%s" % (outdir, section.get('id'))
    try:
        os.makedirs(sectiondir)
    except FileExistsError:
        pass
    baseurl = "%s/tradition/%s/section/%s" % (options.repository, options.tradition_id, section.get('id'))
    # Collect the section dot and SVGify it
    dotparams = {
        'show_normal': 'true',
        'normalise': 'spelling'
    }
    r = requests.get("%s/dot" % baseurl, params=dotparams, auth=auth)
    r.raise_for_status()
    dot = r.text
    dotresult = subprocess.run(["dot", "-Tsvg"], input=r.text, stdout=subprocess.PIPE, encoding='utf-8')
    dotresult.check_returncode()
    with open('%s/graph.svg' % sectiondir, 'w', encoding='utf-8') as svg:
        svg.write(dotresult.stdout)



if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    server = parser.add_argument_group('Stemmarest server connection')
    server.add_argument(
        "-r",
        "--repository",
        required=True,
        help="URL to tradition repository"
    )
    server.add_argument(
        "-u",
        "--username",
        help="HTTP basic auth username for tradition repository"
    )
    server.add_argument(
        "-p",
        "--password",
        help="HTTP basic auth password for tradition repository"
    )

    parser.add_argument(
        "-t",
        "--tradition-id",
        required=True,
        help="ID of tradition to process"
    )
    parser.add_argument(
        "-v",
        "--verbose",
        action="store_true",
        help="turn on verbose output"
    )

    args = parser.parse_args()
    # Make an authentication object if we need to
    authobj = None
    if args.username is not None:
        authobj = HTTPBasicAuth(args.username, args.password)

    # Go do the work.
    collect_tradition_data(args, auth=authobj)
    print("Done!")
