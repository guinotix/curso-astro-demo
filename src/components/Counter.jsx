import { useState } from 'preact/hooks'

export function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div class="flex flex-row justify-center items-center text-white mb-8">
                <button class="border px-3 py-1 text-lg mr-4 font-medium" onClick={() => setCounter(counter => counter - 1)}>-</button>
                <span class="text-lg font-bold">{counter}</span>
                <button class="border px-3 py-1 text-lg ml-4 font-medium" onClick={() => setCounter(counter => counter + 1)}>+</button>
            </div>
        </>
    )
}