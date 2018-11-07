const date = '2018-01-22';
// const pattern = /(\d{4})-(\d{2})-(\d{2})/u;
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;

const result = pattern.exec(date);

console.log(result.groups.month);