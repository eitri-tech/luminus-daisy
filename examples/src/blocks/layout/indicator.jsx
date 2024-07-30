import React from "react";
import {View, Text, Indicator} from "luminus-daisy";

export default function IndicatorBlock() {
    return (
        <View className="bg-white p-4">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Indicator</Text>

                <Text render="p">A simple indicator</Text>
                <Indicator>
                    <span className="indicator-item badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">Empty badge as indicator</Text>
                <Indicator>
                    <span className="indicator-item badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">Badge as indicator</Text>
                <Indicator>
                    <span className="indicator-item badge badge-primary">new</span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">For button</Text>
                <Indicator>
                    <span className="indicator-item badge badge-secondary">99+</span>
                    <button className="btn">inbox</button>
                </Indicator>

                <Text render="p">For tab</Text>
                <Indicator>
                    <a className="tab">Messages</a>
                    <a className="indicator tab tab-active">
                        Notifications
                        <span className="indicator-item badge">8</span>
                    </a>
                    <a className="tab">Requests</a>
                </Indicator>

                <Text render="p">For avatar</Text>
                <Indicator className="avatar">
                    <span className="indicator-item badge badge-secondary">typing…</span>
                    <div className="h-20 w-20 rounded-lg">
                        <img
                            alt="Tailwind CSS examples"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </Indicator>

                <Text render="p">For an input</Text>
                <Indicator>
                    <span className="indicator-item badge">Required</span>
                    <input type="text" placeholder="Your email address" className="input input-bordered" />
                </Indicator>

                <Text render="p">A button as an indicator for a card</Text>
                <Indicator>
                    <div className="indicator-item indicator-bottom">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title">Job Title</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi</p>
                        </div>
                    </div>
                </Indicator>

                <Text render="p">In center of an image</Text>
                <Indicator>
                    <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
                        Uploading Image...
                    </span>
                    <img
                        alt="Tailwind CSS examples"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                </Indicator>

                <Text render="p">indicator-top (default) indicator-center</Text>
                <Indicator>
                    <span className="indicator-item indicator-start badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-top (default) indicator-end (default)</Text>
                <Indicator>
                    <span className="indicator-item indicator-center badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-middle indicator-start</Text>
                <Indicator>
                    <span
                        className="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-middle indicator-center</Text>
                <Indicator>
                    <span
                        className="indicator-item indicator-middle indicator-center badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-middle indicator-end (default)</Text>
                <Indicator>
                    <span className="indicator-item indicator-middle badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-bottom indicator-start</Text>
                <Indicator>
                    <span
                        className="indicator-item indicator-bottom indicator-start badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-bottom indicator-center</Text>
                <Indicator>
                    <span
                        className="indicator-item indicator-bottom indicator-center badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">indicator-bottom indicator-end (default)</Text>
                <Indicator>
                    <span className="indicator-item indicator-bottom badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

                <Text render="p">multiple indicators</Text>
                <Indicator>
                    <span className="indicator-item indicator-top indicator-start badge badge-secondary">
                        top+start
                    </span>
                    <span className="indicator-item indicator-top indicator-center badge badge-secondary">
                        top+center
                    </span>
                    <span className="indicator-item indicator-top indicator-end badge badge-secondary">
                        top+end
                    </span>
                    <span className="indicator-item indicator-middle indicator-start badge badge-secondary">
                        middle+start
                    </span>
                    <span className="indicator-item indicator-middle indicator-center badge badge-secondary">
                        middle+center
                    </span>
                    <span className="indicator-item indicator-middle indicator-end badge badge-secondary">
                        middle+end
                    </span>
                    <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">
                        bottom+start
                    </span>
                    <span className="indicator-item indicator-bottom indicator-center badge badge-secondary">
                        bottom+center
                    </span>
                    <span className="indicator-item indicator-bottom indicator-end badge badge-secondary">
                        bottom+end
                    </span>
                    <div className="bg-base-300 grid h-32 w-60 place-items-center">content</div>
                </Indicator>

                <Text render="p">Responsive</Text>
                <Indicator>
                    <span
                        className="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
                </Indicator>

            </View>
        </View>
    )
}