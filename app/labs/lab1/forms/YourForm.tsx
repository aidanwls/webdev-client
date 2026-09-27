export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>
      <h5>Basic Info</h5>
      <label htmlFor="wd-your-form-first-name">First name: </label>
      <input type="text" placeholder="Aidan" id="wd-your-form-first-name" /> <br />
      <label htmlFor="wd-your-form-last-name">Last name: </label>
      <input type="text" placeholder="Wong" id="wd-your-form-last-name" /> <br />
      <label htmlFor="wd-your-form-student-id">Student ID: </label>
      <input type="password" placeholder="002081118" id="wd-your-form-student-id" />
      <h5>Biography</h5>
      <label htmlFor="wd-your-form-bio">Why I am taking this course: </label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={40}
        rows={5}
        defaultValue="I want to learn how to build full stack web applications and get comfortable with modern frontend and backend frameworks."
      />
      <h5>Class Standing</h5>
      <input type="radio" name="standing" id="wd-your-form-standing-freshman" />
      <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
      <br />
      <input type="radio" name="standing" id="wd-your-form-standing-sophomore" />
      <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="standing" id="wd-your-form-standing-junior" />
      <label htmlFor="wd-your-form-standing-junior">Junior</label>
      <br />
      <input type="radio" name="standing" id="wd-your-form-standing-senior" defaultChecked />
      <label htmlFor="wd-your-form-standing-senior">Senior</label>
      <br />
      <input type="radio" name="standing" id="wd-your-form-standing-graduate" />
      <label htmlFor="wd-your-form-standing-graduate">Graduate</label>
      <h5>Enrollment Type</h5>
      <input type="radio" name="enrollment" id="wd-your-form-enrollment-fulltime" defaultChecked />
      <label htmlFor="wd-your-form-enrollment-fulltime">Full-time</label>
      <br />
      <input type="radio" name="enrollment" id="wd-your-form-enrollment-parttime" />
      <label htmlFor="wd-your-form-enrollment-parttime">Part-time</label>
      <h5>Interests</h5>
      <input type="checkbox" name="interests" id="wd-your-form-interest-react" defaultChecked />
      <label htmlFor="wd-your-form-interest-react">React</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-form-interest-nodejs" defaultChecked />
      <label htmlFor="wd-your-form-interest-nodejs">Node.js</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-form-interest-databases" />
      <label htmlFor="wd-your-form-interest-databases">Databases</label>
      <br />
      <input type="checkbox" name="interests" id="wd-your-form-interest-devops" />
      <label htmlFor="wd-your-form-interest-devops">DevOps</label>
      <h5>Major</h5>
      <label htmlFor="wd-your-form-major">Major: </label>
      <br />
      <select id="wd-your-form-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="IS">Information Systems</option>
        <option value="DS">Data Science</option>
        <option value="CE">Computer Engineering</option>
      </select>
      <h5>Topics to Deepen This Term</h5>
      <label htmlFor="wd-your-form-topics">Topics: </label>
      <br />
      <select multiple id="wd-your-form-topics" defaultValue={["FRONTEND", "DATABASES"]}>
        <option value="FRONTEND">Frontend Development</option>
        <option value="BACKEND">Backend Development</option>
        <option value="DATABASES">Databases</option>
        <option value="DEPLOYMENT">Deployment</option>
      </select>
      <h5>Contact and Program Info</h5>
      <label htmlFor="wd-your-form-email">School email: </label>
      <input type="email" placeholder="wong.lok@northeastern.edu" id="wd-your-form-email" />
      <br />
      <label htmlFor="wd-your-form-grad-year">Expected graduation year: </label>
      <input type="number" defaultValue={2027} min={2026} max={2032} id="wd-your-form-grad-year" />
      <br />
      <label htmlFor="wd-your-form-start-date">Program start date: </label>
      <input
        type="date"
        defaultValue="2024-09-01"
        min="2020-01-01"
        max="2030-12-31"
        id="wd-your-form-start-date"
      />
      <br />
      <label htmlFor="wd-your-form-excitement">
        How excited are you about this course (0-10):{" "}
      </label>
      <input type="range" defaultValue={9} min={0} max={10} id="wd-your-form-excitement" />
      <h5>Actions</h5>
      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
