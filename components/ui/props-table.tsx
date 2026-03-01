import { PropsTableProps } from "@/lib/types";

const fixedColTh =
  "text-left min-w-[100px] max-w-[250px] px-[30px] py-4 text-base/7 text-text-primary leading-none font-medium";
const fixedColTd =
  "min-w-[100px] max-w-[250px] px-[30px] py-4 text-base/7 text-text-secondary leading-none";
const descTh =
  "text-left px-[30px] py-4 text-base/7 text-text-primary leading-none font-medium";
const descTd = "px-[30px] py-4 text-base/7 text-text-secondary";

export default function PropsTable({
  props,
  title = "Props",
}: PropsTableProps) {
  return (
    <div className="mb-4 md:mb-20">
      <h2 className="text-2xl/7 md:text-3xl/7 tracking-tight text-text-primary mb-4 font-semibold">
        {title}
      </h2>
      <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-bg-secondary border-b border-gray-200 dark:border-neutral-800">
                <th className={fixedColTh}>Prop</th>
                <th className={fixedColTh}>Type</th>
                <th className={fixedColTh}>Default</th>
                <th className={descTh}>Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr
                  key={prop.name}
                  className={
                    index < props.length - 1
                      ? "border-b border-gray-200 dark:border-neutral-800"
                      : ""
                  }
                >
                  <td className={fixedColTd}>
                    {prop.name}
                    {prop.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </td>
                  <td className={fixedColTd}>{prop.type}</td>
                  <td className={fixedColTd}>{prop.default}</td>
                  <td className={descTd}>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
