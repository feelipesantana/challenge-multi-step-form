import { StepOptions } from "../StepOptions"

import Image from "next/image"

export function StepFinish() {
    return (
        <div className="flex h-full">
            <StepOptions />
            <div className="flex flex-col gap-6 flex-1 w items-center justify-center ">
                <Image src={'assets/icons/icon-thank-you.svg'} width={100} height={100} alt="Image Ok" />
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold">Thank you!</h1>
                    <p className="text-cool-gray">
                        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,please feel
                        free to email us at support@loregaming.com.
                    </p>
                </div>
            </div>
        </div >
    )
}