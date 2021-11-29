function add(a: number, b: number, printResult: boolean, resultPhrase: string) {
  const result = a + b;
  if (showResult) {
    console.log(resultPhrase + result);
  }
  return result;
}
// typescript会自动进行类型推断
const a = 5;
const b = 2.8;
const resultPhrase = "Result is ";
const showResult = true;
add(a, b, showResult, resultPhrase);
