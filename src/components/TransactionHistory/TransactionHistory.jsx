import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr className={css.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(items) &&
            items.map((item) => {
              return (
                <tr key={item.id} className={css.tableItem}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
