// import Card from './components/Card';
import ExpenseItem from './components/ExpenseItem';
import Basiclogin from './components/Basiclogin';
// import ExpenseDate from './components/ExpenseDate';


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <>
      <h1>Let'get start</h1>

      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />


      <Basiclogin />

    </>
  );



}
export default App;
