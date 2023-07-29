export default function Content({imgUrl,imgAlt,position,timeperiod,org,desc}){
    return(
        <div>
                {imgUrl && <img src={imgUrl} alt={imgAlt} className="w-20 my-2" />}
                <div className="flex justify-between">{position && <h4 className="font-bold">{position}</h4>}{timeperiod && <p className="font-thin">{timeperiod}</p> }</div>
                {/* {position && <h4 className="font-bold">{position} <span className="font-bold">{timeperiod}</span></h4>} */}
                {org && <h5 className="font-medium text-lg">{org}</h5>}
                {desc && <p className="italic">{desc}</p>}
                </div>
    )
}