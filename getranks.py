import xml.etree.ElementTree as ET
import json

tree = ET.parse('src/static/graph.svg')
root = tree.getroot()
namespaces = {'svg': 'http://www.w3.org/2000/svg'}

rankdict = {}

for gg in root.findall('svg:g', namespaces):
	for g in gg.findall('svg:g', namespaces):
		if g.attrib['class'] == 'node':
			nid = g.attrib['id']
			for ellipse in g.findall('svg:ellipse', namespaces):
				rankkey = int(ellipse.attrib['cx'])
				if not (rankkey in rankdict):
					rankdict[rankkey] = []
				rankdict[rankkey].append(nid)

skeys = sorted(rankdict.keys())

finaldict = {}
for rank in range(len(skeys)):
	key = skeys[rank]
	for nid in rankdict[key]:
		finaldict[nid] = rank

print json.dumps(finaldict)