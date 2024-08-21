import React from 'react';
import presi from "../assets/president.png"

function Message() {
    return (
        <div className='bg-white'>
            <h1 className='text-center text-orange-600 text-3xl font-bold mt-20 mb-5'>Message from our President</h1>
            <div>
                <div className="flex flex-col lg:flex-row items-center justify-between px-12 lg:px-36">
                    <img src={presi} className='w-64 rounded-full my-3 lg:my-0 lg:me-16' alt="..." />
                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima nesciunt ullam, temporibus vero placeat esse fugit suscipit ducimus nihil possimus assumenda facere iusto cupiditate adipisci in, deserunt, voluptates sequi?
                            Impedit, est ullam. Eos nisi, consequatur recusandae perferendis voluptatem repellat rem, necessitatibus delectus libero quaerat ea saepe hic temporibus, atque praesentium tempore id. Neque omnis minima consequatur itaque aspernatur fugiat?
                            Sapiente suscipit neque, est atque et fugiat voluptate, modi eaque quaerat illum earum! Obcaecati ex, dolores minima iure ea quaerat aperiam molestias iusto animi dolore similique in unde? Consectetur, fuga!
                            voluptatem et libero nemo alias temporibus deleniti in amet facilis un
                        </p>
                        <p className='text-right text-orange-600 font-semibold text-lg'>~Mukul Biswas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;