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
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                {title}
            </h3>
            <div className="border border-gray-200 dark:border-neutral-800 rounded-[16px] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
                                <th className="text-left p-4 text-sm font-semibold text-black dark:text-white leading-none">
                                    Prop
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-black dark:text-white leading-none">
                                    Type
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-black dark:text-white leading-none">
                                    Default
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-black dark:text-white leading-none">
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
                                    <td className="p-4 text-sm text-neutral-700 dark:text-gray-300 font-mono leading-none">
                                        {prop.name}
                                        {prop.required && <span className="text-red-500 ml-1">*</span>}
                                    </td>
                                    <td className="p-4 text-sm text-neutral-700 dark:text-gray-300 font-mono leading-none">
                                        {prop.type}
                                    </td>
                                    <td className="p-4 text-sm text-neutral-700 dark:text-gray-300 font-mono leading-none">
                                        {prop.default}
                                    </td>
                                    <td className="p-4 text-sm text-neutral-700 dark:text-gray-300">
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

