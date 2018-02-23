import { handleActions } from 'redux-actions';
import {
  ADD_COUNTDOWN,
  REMOVE_COUNTDOWN,
  UPDATE_COUNTDOWN,
  RESET_COUNTDOWN,
  START_COUNTDOWN,
  STOP_COUNTDOWN
} from '../types/countDown';
let genId = 0;
export default handleActions(
  {
    [ADD_COUNTDOWN](state, action) {
      return {
        ...state,
        countDownList: [
          ...state.countDownList,
          {
            ...action.payload,
            id: genId++,
            status: 0
          }
        ]
      };
    },
    [REMOVE_COUNTDOWN](state, action) {
      return {
        ...state,
        countDownList: state.countDownList.filter(v => v.id !== action.payload)
      };
    },
    [RESET_COUNTDOWN](state, action) {
      return {
        ...state,
        countDownList: state.countDownList.map(v => {
            console.log(action.payload);
          if (v.id == action.payload) {
            return {
              ...v,
              leaveTime: null,
              leaveTimeString: '',
              status: 0,
              stop:true
            };
          } else {
            return v;
          }
        })
      };
    },
    [UPDATE_COUNTDOWN](state, action) {
      return {
        ...state,
        countDownList: state.countDownList.map(v => {
          if (v.id == action.payload.id) {
            return {
              ...v,
              ...action.payload.data
            };
          } else {
            return v;
          }
        })
      };
    },
    [STOP_COUNTDOWN](state, action) {
      return {
        ...state,
        countDownList: state.countDownList.map(v => {
          if (v.id == action.payload) {
            return {
              ...v,
              status: 0，
              leaveTime:new Date()-v.startTime
            };
          } else {
            return v;
          }
        })
      };
    },
    [START_COUNTDOWN](state, action) {
      return {
        ...state,
        countDownList: state.countDownList.map(v => {
          if (v.id == action.payload) {
            return {
              ...v,
              status: 1,
              startTime: new Date(),
              stop: false
            };
          } else {
            return v;
          }
        })
      };
    }
  },
  {
    countDownList: [
      {
        id: 99,
        name: '基克拉夫',
        time: '14:00',
        status: 0
      },
      {
        id: 100,
        name: '发决定书卡拉苏打粉',
        time: '00:10',
        status: 0
      },
      {
        id: 101,
        name: '发决',
        time: '00:04',
        status: 0
      },
      {
        id: 108,
        name: '发决fjskdalf',
        time: '00:04',
        status: 0
      },
      {
        id: 102,
        name: '发决fjdkls',
        time: '00:04',
        status: 0
      },
      {
        id: 103,
        name: '发决',
        time: '00:08',
        status: 0
      }
    ]
    // asyncNum: 0
  }
);
