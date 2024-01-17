import { calculateInvestmentResults, formatter } from "../util/investment";

const COLUMNS_NAMES = [
  "Year",
  "investment Value",
  "Interest(Year)",
  "Total Interest",
  "Duration",
];

export default function Results({ userData }) {
  const initialResult = calculateInvestmentResults(userData);

  let updatedInterest = 0;

  const finalResultList = initialResult.map((element) => {
    updatedInterest += element.interest;
    return {
      year: element.year,
      valueEndOfYear: formatter.format(element.valueEndOfYear),
      interest: formatter.format(element.interest),
      totalInterest: formatter.format(updatedInterest),
      investedCapital: formatter.format(
        element.valueEndOfYear - updatedInterest
      ),
    };
  });

  return (
    <table id="result">
      <thead>
        <tr key="head-group">
          {COLUMNS_NAMES.map((item, i) => {
            return <th key={i}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {finalResultList.map((element, i) => {
          return (
            <tr key={i}>
              <td>{element.year}</td>
              <td>{element.valueEndOfYear}</td>
              <td>{element.interest}</td>
              <td>{element.totalInterest}</td>
              <td>{element.investedCapital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
