import { cn } from "@/lib/utils";
const ProductPrice = ({
  Value,
  className,
}: {
  Value: number;
  className?: string;
}) => {
  const stringValue = Value.toFixed(2);
  const [integerPart, decimalPart] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integerPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  );
};

export default ProductPrice;
