type testA = "text";

type CustomType = `some ${testA}`;

const testing: CustomType = "some text";
// const testing2: CustomType = "some text 2";

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;
