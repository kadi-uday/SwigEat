import { sum } from "../sum";

test( "Sum function should calculate the sum of two numbers" , () => {
    const result = sum(6,4);

    expect(result).toBe(10); // this line or this process is call as ASSERTION.
});