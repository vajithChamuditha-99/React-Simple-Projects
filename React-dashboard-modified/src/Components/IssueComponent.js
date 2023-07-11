import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../App.css';

const IssueComponent = () => {
  useEffect(() => {
    calculate();
  });

  const issuesLabel = 'Issues';
  const words = ['view All', 'view Less'];
  const [issues, setIssues] = useState();
  const [sorted, setSorted] = useState([]);
  const [sliceValue, setSliceValue] = useState(5);
  const [word, setWord] = useState(words[0]);
  const [showAndHide, setShowAndHide] = useState(false);

  const data = [
    {
      name: 'issue01',
      value: 28,
      color: '#004080',
    },
    {
      name: 'issue02',
      value: 2,
      color: '#ff471a',
    },
    {
      name: 'issue03',
      value: 2,
      color: '#ff7733',
    },
    {
      name: 'issue04',
      value: 3,
      color: '#ff9900',
    },
    {
      name: 'issue05',
      value: 3,
      color: '#ffb84d',
    },
    {
      name: 'issue06',
      value: 4,
      color: '#e6ac00',
    },
    {
      name: 'issue07',
      value: 5,
      color: '#b38600',
    },
    {
      name: 'issue08',
      value: 8,
      color: '#99cc00',
    },
    {
      name: 'issue09',
      value: 8,
      color: '#009933',
    },
    {
      name: 'issue10',
      value: 10,
      color: '#339966',
    },
    {
      name: 'issue11',
      value: 14,
      color: '#0086b3',
    },
    {
      name: 'issue12',
      value: 19,
      color: '#006699',
    },
  ];

  const calculate = () => {
    let sum = 0;
    const tempArr = [];
    data.forEach(function (item) {
      sum += item.value;
      tempArr.push(item);
    });
    setIssues(sum);
    setSorted(tempArr.sort((a, b) => (a.value < b.value ? 1 : a > b ? -1 : 0)));
  };

  const handleClick = () => {
    if (!showAndHide) {
      setShowAndHide(true);
      showCollapse();
    } else {
      setShowAndHide(false);
      showCollapse();
    }
  };

  const showCollapse = () => {
    if (showAndHide) {
      setSliceValue(5);
      setWord(words[0]);
    } else {
      setSliceValue(sorted.length);
      setWord(words[1]);
    }
  };

  return (
    <div>
      <div className="issueComponent2">
        <div className="ChartComponent">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={85}
            >
              {data.map((value, index) => (
                <Cell key={`cell-${index}`} fill={value.color} />
              ))}
              <Label width={30} position="center">
                {`${issuesLabel} ${issues}`}
              </Label>
            </Pie>
          </PieChart>
        </div>
        <div className="TableComponent">
          <Table style={{ textAlign: 'left' }} responsive="md">
            <tbody>
              <tr className="issueTableHead">
                <td style={{ width: '50%' }}>Top 5 Issues</td>
                <td style={{ width: '25%' }}># of Inquiries</td>
                <td style={{ width: '25%' }}>Percentage</td>
              </tr>
              {sorted.slice(0, sliceValue).map((item, index) => (
                <tr>
                  <td className="py-2">
                    {index + 1}.
                    <svg height="20" width="30">
                      <circle cx="15" cy="8" r="5" fill={item.color}></circle>
                    </svg>{' '}
                    {item.name}
                  </td>
                  <td>
                    {item.value} <br />
                  </td>
                  <td>
                    {Math.round((item.value / (issues / 2)) * 10000) / 100}%
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="tableButtonDiv">
            <Button variant="link" onClick={() => handleClick()}>
              {word}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueComponent;
