let store = {
    state: {
        ClubsData: [],
        MyClubsData: [],
        MyMemberClubsData: [],
        MyLeaderClubsData: [],
        get_events: undefined
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    showEvents() {
        this._callSubscriber(this.state)
    }

}

export default store;