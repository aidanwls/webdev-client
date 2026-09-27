export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Node.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Express</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">MongoDB</td>
            <td align="center">3/17/21</td>
            <td align="right">93</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">REST APIs</td>
            <td align="center">3/24/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Authentication</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">84</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">88.5</td>
          </tr>
        </tfoot>
      </table>

      <h4>My Fall 2026 Courses</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Title</th>
            <th align="center">College</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS2800</td>
            <td align="center">Logic & Computation</td>
            <td align="center">Khoury College of Computer Sciences</td>
          </tr>
          <tr>
            <td>CS3650</td>
            <td align="center">Computer Systems</td>
            <td align="center">Khoury College of Computer Sciences</td>
          </tr>
          <tr>
            <td>CS4400</td>
            <td align="center">Programming Languages</td>
            <td align="center">Khoury College of Computer Sciences</td>
          </tr>
          <tr>
            <td>CS4550</td>
            <td align="center">Web Development</td>
            <td align="center">Khoury College of Computer Sciences</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
