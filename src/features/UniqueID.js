let UUid = 0

export default function UniqueID(){
    const getID = () => {
        UUid++
        return UUid
    }

    return{
        getID
    }
}