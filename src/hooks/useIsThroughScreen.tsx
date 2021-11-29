// 判断某个div元素是否在屏幕中
import { MutableRefObject, useEffect, useState } from "react";

export default function useIsThroughScreen(
  elementRef: MutableRefObject<HTMLDivElement | undefined>,
  initialVaule: boolean,
  offset: number = 0
): boolean {
  const [isInside, setIsInside] = useState<boolean>(initialVaule);
  useEffect(() => {
    const scrollEvent = () => {
      // 距离屏幕顶部的距离
      const top =
        elementRef.current && elementRef.current.getBoundingClientRect().top;
      // 距离屏幕底部的距离
      const bottom =
        elementRef.current && elementRef.current.getBoundingClientRect().bottom;
      if (top && bottom) {
        if (
          (top >= 0 + offset && top <= window.innerHeight - offset) ||
          (bottom >= 0 + offset && bottom <= window.innerHeight - offset) ||
          (top <= 0 + offset && bottom >= window.innerHeight - offset)
        ) {
          setIsInside(true);
        } else {
          setIsInside(false);
        }
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [elementRef, offset]);
  return isInside;
}
