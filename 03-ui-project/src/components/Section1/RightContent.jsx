import RightCard from './RightCard.jsx'

const RightContent = (props) => {
    return (
        <div id='right' className='h-full overflow-x-auto flex flex-nowrap gap-10 p-6 w-3/4'>

            {props.users.map(function (elem,idx){
                return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro}/>
            })}
        </div>
    )
}
export default RightContent
