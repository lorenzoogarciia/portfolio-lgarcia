'use client'

interface StudyData {
    title: string;
    center: string;
    date: string;
}

export default function StudyCard(
    {title, center, date}: StudyData
) {
    return (
        <div className="flex flex-col mt-6">
            <div className="rounded-xl border-2 border-secondary p-4 max-w-[300px] max-h-[200px] transition-colors duration-150 hover:border-primary hover:bg-secondary hover:text-primary">
                <h1 className="text-xl">{title}</h1>
                    <h3 className="text-lg">{center}</h3>
                    <h2 className="text-lg font-normal">{date}</h2>
            </div>
        </div>
    )
}