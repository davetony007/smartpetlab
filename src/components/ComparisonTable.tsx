import { Check, X, Minus } from "lucide-react";

interface ComparisonRow {
    feature: string;
    products: (string | boolean | null)[]; // null = N/A or empty
}

interface ComparisonTableProps {
    productNames: string[];
    rows: ComparisonRow[];
}

export function ComparisonTable({ productNames, rows }: ComparisonTableProps) {
    return (
        <div className="my-8 overflow-hidden rounded-xl border border-zinc-200 shadow-sm dark:border-zinc-800">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] table-fixed text-left text-sm">
                    <thead>
                        <tr className="bg-zinc-50 dark:bg-zinc-900">
                            <th className="w-1/4 p-4 font-medium text-zinc-500 dark:text-zinc-400">Feature</th>
                            {productNames.map((name, i) => (
                                <th key={i} className="w-1/4 p-4 font-bold text-zinc-900 dark:text-white">
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-black">
                        {rows.map((row, i) => (
                            <tr key={i} className="transition hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50">
                                <td className="p-4 font-medium text-zinc-700 dark:text-zinc-300">{row.feature}</td>
                                {row.products.map((cell, j) => (
                                    <td key={j} className="p-4 text-zinc-600 dark:text-zinc-400">
                                        {renderCell(cell)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function renderCell(value: string | boolean | null) {
    if (value === true) {
        return <Check className="h-5 w-5 text-green-500" />;
    }
    if (value === false) {
        return <X className="h-5 w-5 text-red-500" />;
    }
    if (value === null) {
        return <Minus className="h-4 w-4 text-zinc-300" />;
    }
    return <span>{value}</span>;
}
