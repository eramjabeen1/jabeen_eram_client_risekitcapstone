import JournalForm from '../components/JournalForm'
import JournalEntryList from '../components/JournalEntryList'
// import MoodPicker from '../components/MoodPicker'
// import StreakCounter from '../components/StreakCounter'

const JournalPage = () => {
  return (
    <div className="journal-page">
      {/* streak and mood picker can come after MVP */}
      <JournalForm />
      {/* <JournalEntryList /> */}
    </div>
  )
}

export default JournalPage
