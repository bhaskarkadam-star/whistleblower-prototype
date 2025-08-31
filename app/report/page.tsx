export default function ReportPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Whistleblower Report Form</h1>
      <form>
        <label>Your Name (optional):</label><br />
        <input type="text" name="name" /><br /><br />

        <label>Department:</label><br />
        <input type="text" name="department" /><br /><br />

        <label>Details of Concern:</label><br />
        <textarea name="details" rows={5} cols={40}></textarea><br /><br />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  )
}
