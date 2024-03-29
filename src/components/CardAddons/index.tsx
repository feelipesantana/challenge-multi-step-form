import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { useData } from "@/hook/useData";

interface CardAddonsProps {
    title: string
    description: string
    value: number
}
export function CardAddons({ title, description, value }: CardAddonsProps) {
    const [checkCard, setCheckCard] = useState(false)
    const { setAddons, plan, valueType, addons } = useData()

    function handleAddon() {
        setAddons([{ title: title, amount: value }])
        setCheckCard(!checkCard)
    }

    useEffect(() => {
        const filtered = addons.filter(res => res.title === title)

        if (filtered.length > 0) {
            setAddons([{ title: title, amount: value }])
            setCheckCard(true)

        } else {
            setCheckCard(false)

        }
    }, [valueType])

    return (
        <Card
            className={` ${checkCard ? ' border-marine-blue' : 'border-light-gray'} 
            border h-20 flex items-center p-4 cursor-pointer transition duration-300 hover:border-marine-blue`}
            onClick={handleAddon}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start gap-6">
                    <Checkbox checked={checkCard} className="data-[state=checked]:bg-purplish-blue h-5 w-5 border-light-gray" value={title} />
                    <div className="space-y-2">
                        <strong className="text-base font-medium text-marine-blue ">{title}</strong>
                        <p className="text-sm text-cool-gray font-normal"> {description}</p>
                    </div>
                </div>
                <span className="text-xs text-purplish-blue ">
                    +${value}{valueType === 'M' ? '/mo' : '/yr'}
                </span>
            </div>
        </Card>
    )
}