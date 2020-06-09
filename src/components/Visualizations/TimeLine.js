import React, { useState } from 'react';
import EditionHeader from './../Edition/EditionHeader'
import Chart from 'react-google-charts';
import { Redirect, withRouter } from 'react-router-dom';

const Timeline = (props) => {
  const {
    onSearch,
    timelineData
  } = props;

  const [redirectPath, setRedirectPath] = useState();

  const sortedDataset = timelineData.sort((a, b) => { return new Date(a.earliestDate).getTime() - new Date(b.earliestDate).getTime() });

  const filteredSortedDataset = sortedDataset.filter((event) => !!(event.earliestDate && event.latestDate));

  const pickDate = (date1, date2, earliestOrLatest) => {
    if (earliestOrLatest === 'earliest') {
      return (date1 < date2 ? date1 : date2);
    } else if (earliestOrLatest === 'latest') {
      return (date1 < date2 ? date2 : date1);
    }
  };

  const data = [
    [
      { type: 'string', id: 'Section' },
      { type: 'string', id: 'Label' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' }
    ],
    ...filteredSortedDataset.map((event) =>
      [
        event.section,
        event.translation || "No translation available",
        pickDate(new Date(event.earliestDate), new Date(event.latestDate), "earliest"),
        pickDate(new Date(event.earliestDate), new Date(event.latestDate), "latest")
      ]
    )
  ];

  if (redirectPath) {
    return( <Redirect push to={`/Edition/${redirectPath}`} />);
  }

  return(
    <>
      <EditionHeader onSearch = {props.onSearch} />
      <h1 style={{margin: 40, textAlign: 'center'}}> <i>Timeline</i></h1>
      <Chart
        width={'95vw'}
        height={'65vh'}
        style={{marginLeft: 10}}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          timeline: {
            showRowLabels: false,
            groupByRowLabel: false
          }
        }}
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection && selection.length === 1) {
                const dataTable = chartWrapper.getDataTable();
                const [selectedItem] = selection;
                const { row } = selectedItem;
                const sectionID = dataTable.getValue(row, 0);
                setRedirectPath(sectionID);
              }
            },
          },
          {
            eventName: 'ready',
            callback: (() => {
              // for vertical scroll
              document.querySelectorAll('#reactgooglegraph-1 svg').forEach((el) => el.style.height = 'auto')
            })
          }
        ]}
        rootProps={{ 'data-testid': '1' }}
      />
    </>
  );
};

export default withRouter(Timeline);
