const GreenButton = ({ name, onClick }: { name: string, onClick: () => void }) => {
    return (
        <div 

        className="text-black bg-[#ADD030] font-medium py-3 px-6 rounded-full " onClick={onClick}>
            {name}
        </div>
    )
}

export default GreenButton;