import { renderHook } from "@testing-library/react-hooks";
import useLatestValue from "./index";

describe("useLatestValue()", () => {
  test("returns a function", () => {
    const { result } = renderHook(() => useLatestValue());
    expect(typeof result.current).toEqual("function");
  });

  test("returns initial value after first render", () => {
    const initValue = 5;
    const { result } = renderHook(() => useLatestValue(initValue));
    expect(result.current()).toEqual(initValue);
  });

  test("returns latest value after 1 update", () => {
    let value = 5;
    const { result, rerender } = renderHook(() => useLatestValue(value));

    value = 10;
    rerender();
    expect(result.current()).toEqual(value);
  });

  test("returns latest value after 2 update", () => {
    let value = 5;
    const { result, rerender } = renderHook(() => useLatestValue(value));

    value = 10;
    rerender();
    value = 20;
    rerender();
    expect(result.current()).toEqual(value);
  });
});
