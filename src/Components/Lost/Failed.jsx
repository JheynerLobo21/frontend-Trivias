import "/src/css/failed.scss";

export const Failed = () => {
    const scoreTotal = localStorage.getItem("scoreTotal");
    return (
        <>
            <div className="failed">
                <div className="glitch" data-text="GAME OVER">
                    GAME OVER
                </div>
                <div className="menu-lost">
                    <div className="score-img">
                        <img src="/public/einstein.png" alt="einstein triste" className="einstein" />
                        <div className="circle-small"></div>
                        <div className="circle-medium"></div>
                        <div className="cloud">
                            <p className="scoreTotal">{scoreTotal} puntos</p>
                        </div>
                    </div>
                    <div className="wrappers">
                        <div className="wrapper">
                            <button className="again-play">
                                VOLVER A JUGAR
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div className="wrapper2">
                            <button className="again-play w-category">
                                VOLVER A CATEGORÍAS
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
