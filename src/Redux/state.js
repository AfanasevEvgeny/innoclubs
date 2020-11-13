import joinClub_reducer from "./JoinClub-reducer"
let store = {
    state: {
        ClubsData: [],
        MyClubsData: [],
        MyMemberClubsData: [],
        MyLeaderClubsData: [],
        get_events: undefined
    },
    _callSubscriber()
    {

    },
    subscribe(observer)
    {
        this._callSubscriber = observer;
    },
    showEvents()
    { // я тупо не могу смотреть никак
        this._callSubscriber(this.state)
    },

    dispatch(action)
    {
        this.state.MyMemberClubsData = joinClub_reducer(this.state.MyMemberClubsData, action)
        this._callSubscriber(this.state)
    }

}

export default store;