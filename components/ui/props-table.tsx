interface Prop {
    name: string;
    type: string;
    default: string;
    description: string;
    required?: boolean;
}

interface PropsTableProps {
    props: Prop[];
    title?: string;
}

export default function PropsTable({ props, title = "Props" }: PropsTableProps) {
    return (
        <div className="mb-8">
            <h3 className="text-base md:text-xl  text-black dark:text-white mb-4 font-medium">
                {title}
            </h3>
            <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse md:table-fixed">
                        <colgroup>
                            <col className="w-[15%]" />
                            <col className="w-[15%]" />
                            <col className="w-[30%]" />
                            <col className="w-[40%]" />
                        </colgroup>
                        <thead>
                            <tr className="bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 text-base/7 ">
                                <th className="text-left p-4 text-base/7 text-black dark:text-white leading-none font-medium">
                                    Prop
                                </th>
                                <th className="text-left p-4 text-base/7 text-black dark:text-white leading-none font-medium">
                                    Type
                                </th>
                                <th className="text-left p-4 text-base/7 text-black dark:text-white leading-none font-medium">
                                    Default
                                </th>
                                <th className="text-left p-4 text-base/7 text-black dark:text-white leading-none font-medium">
                                    Description
                                </th>
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
                                    <td className="p-4 text-base/7 text-neutral-500 dark:text-gray-400  leading-none">
                                        {prop.name}
                                        {prop.required && <span className="text-red-500 ml-1">*</span>}
                                    </td>
                                    <td className="p-4 text-base/10 text-neutral-500 dark:text-gray-400  leading-none">
                                        {prop.type}
                                    </td>
                                    <td className="p-4 min-w-[300px] md:text-base/7 text-neutral-500 dark:text-gray-400  leading-none">
                                        {prop.default}
                                    </td>
                                    <td className="p-4 text-base/7 text-neutral-500 dark:text-gray-400">
                                        {prop.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

