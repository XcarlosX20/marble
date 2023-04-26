import { CircleContainer } from "../Carousel/Ciclex";
import { Circle } from "../Carousel/Circle";
import { Button } from "../Layout/Button";
import {useMediaQuery}  from '@/Hooks/useMediaQuery';
const SelectMarble = () => {
    const mobile = useMediaQuery('(max-width: 768px)')
    return ( 
    <>
    <section className="bg-gray-100">
       <div className="w-full flex flex-col md:flex-row lg:flex-row">
            <div className="p-2 w-1/2">
                <article>
                    <h4 className="text-dark-100">A WORLD OF MARBLE TO CHOOSE FROM</h4>
                    <p className="fontWhite">Upgrade your space with durable and elegant marble. Trust us for expert marble work and a stunning, long-lasting result.</p>
                </article>
                <Button>
                    SCHEDULE A FREE CONSULTATION
                </Button>
            </div>
            {/* <Circle size={mobile ? 200 : 400} options={[
        {name: 'Portoro', img: 'https://s3-alpha-sig.figma.com/img/71ba/49cf/7dd12aa15aff5db67f2128427396c3fa?Expires=1683504000&Signature=M794ec2ApdC4FlML8qyRfP7b6wr4fiS6GcLDMAt64Q3KbAqtMSO1D27ofrgqNuDeUZney8~jrNbbZ5ZyHO9SnaAEfBviNls9K5Hw7zsXhwOIPQKB3zSlgoBIQvKCf~6zy1LItsaO8gVSmivE1J3rq1T-daUv6h~1L7oVCBWZEpby2hnT8STba4qnTmM3RdHz8doD0ZUDF~RklSxCMPBqIkkopBSsXbINwdQLzoqEzmpAYteqhaa5f8FJF7nCEdElcpbcT0elOmmwJstd8EQwgPuiiXj7~0RPmxScoDw1M-M7S8iemUhvemnqCMTWqGX887jDBzIgiyUWTbdsyDVu0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', id: '1a'},
        {name: 'Azure Marble', img: 'https://s3-alpha-sig.figma.com/img/bff6/fc4c/63efca122f0244f117a11aa9cbd8f463?Expires=1683504000&Signature=NlJ5-hdqPSBpiHo50pQ96Ic49F8vBGMaQxEMo4F9BvBwxUiaZGQBwZqf1C5adwJC8s0BEjExXYJRZcDxVsaxUBBM47McK3rFlqMonZQXjTno~KjiGiuMYyBWRzYiODERef2ANk1q-Vbx4OOGcsDaNncJSGXP4alqTQaobGLwhEI8JPYgyTbJ3qzQqxijHCxu8qyRJe0iZ1C63qX1-5gaz8dK~LhuW-tCwhx1VgC7CT5-VMqz~3tU7~Nkrfqh2~Y3CxlJ8G7l0tSSTHOC~UrErlyqKALOrV4D4D~xw9cM8qcHcApcg3JeMOfsWmQ5pgXrJhCwdCt8s8M2UGoyd2akGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', id: '2b'},
        {name: 'Green Alps', img: 'https://s3-alpha-sig.figma.com/img/71ba/49cf/7dd12aa15aff5db67f2128427396c3fa?Expires=1683504000&Signature=M794ec2ApdC4FlML8qyRfP7b6wr4fiS6GcLDMAt64Q3KbAqtMSO1D27ofrgqNuDeUZney8~jrNbbZ5ZyHO9SnaAEfBviNls9K5Hw7zsXhwOIPQKB3zSlgoBIQvKCf~6zy1LItsaO8gVSmivE1J3rq1T-daUv6h~1L7oVCBWZEpby2hnT8STba4qnTmM3RdHz8doD0ZUDF~RklSxCMPBqIkkopBSsXbINwdQLzoqEzmpAYteqhaa5f8FJF7nCEdElcpbcT0elOmmwJstd8EQwgPuiiXj7~0RPmxScoDw1M-M7S8iemUhvemnqCMTWqGX887jDBzIgiyUWTbdsyDVu0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', id: '3c'},
        {name: 'Portoro', img: 'https://s3-alpha-sig.figma.com/img/71ba/49cf/7dd12aa15aff5db67f2128427396c3fa?Expires=1683504000&Signature=M794ec2ApdC4FlML8qyRfP7b6wr4fiS6GcLDMAt64Q3KbAqtMSO1D27ofrgqNuDeUZney8~jrNbbZ5ZyHO9SnaAEfBviNls9K5Hw7zsXhwOIPQKB3zSlgoBIQvKCf~6zy1LItsaO8gVSmivE1J3rq1T-daUv6h~1L7oVCBWZEpby2hnT8STba4qnTmM3RdHz8doD0ZUDF~RklSxCMPBqIkkopBSsXbINwdQLzoqEzmpAYteqhaa5f8FJF7nCEdElcpbcT0elOmmwJstd8EQwgPuiiXj7~0RPmxScoDw1M-M7S8iemUhvemnqCMTWqGX887jDBzIgiyUWTbdsyDVu0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', id: '4d'},
        {name: 'Azure Marble', img: 'https://s3-alpha-sig.figma.com/img/bff6/fc4c/63efca122f0244f117a11aa9cbd8f463?Expires=1683504000&Signature=NlJ5-hdqPSBpiHo50pQ96Ic49F8vBGMaQxEMo4F9BvBwxUiaZGQBwZqf1C5adwJC8s0BEjExXYJRZcDxVsaxUBBM47McK3rFlqMonZQXjTno~KjiGiuMYyBWRzYiODERef2ANk1q-Vbx4OOGcsDaNncJSGXP4alqTQaobGLwhEI8JPYgyTbJ3qzQqxijHCxu8qyRJe0iZ1C63qX1-5gaz8dK~LhuW-tCwhx1VgC7CT5-VMqz~3tU7~Nkrfqh2~Y3CxlJ8G7l0tSSTHOC~UrErlyqKALOrV4D4D~xw9cM8qcHcApcg3JeMOfsWmQ5pgXrJhCwdCt8s8M2UGoyd2akGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', id: '5e'},
        {name: 'Green Alps', img: 'https://s3-alpha-sig.figma.com/img/71ba/49cf/7dd12aa15aff5db67f2128427396c3fa?Expires=1683504000&Signature=M794ec2ApdC4FlML8qyRfP7b6wr4fiS6GcLDMAt64Q3KbAqtMSO1D27ofrgqNuDeUZney8~jrNbbZ5ZyHO9SnaAEfBviNls9K5Hw7zsXhwOIPQKB3zSlgoBIQvKCf~6zy1LItsaO8gVSmivE1J3rq1T-daUv6h~1L7oVCBWZEpby2hnT8STba4qnTmM3RdHz8doD0ZUDF~RklSxCMPBqIkkopBSsXbINwdQLzoqEzmpAYteqhaa5f8FJF7nCEdElcpbcT0elOmmwJstd8EQwgPuiiXj7~0RPmxScoDw1M-M7S8iemUhvemnqCMTWqGX887jDBzIgiyUWTbdsyDVu0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', id: '6f'}
    ]}/> */}
    {/* <CircleContainer/> */}
    <div className="bg-light-100 w-1/2 h-full flex justify-center items-center">
        <CircleContainer/>
    </div>
       </div>
    </section>
    </> 
    );
}
export {SelectMarble};