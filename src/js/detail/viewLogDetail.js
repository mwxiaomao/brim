/* @flow */

import type {Thunk} from "redux-thunk"

import {fetchByMd5, fetchTuplesByUid} from "./correlations"
import {getRightSidebarIsOpen} from "../state/reducers/view"
import {pushLogDetail} from "../state/actions"
import Log from "../models/Log"

export const viewLogDetail = (log: Log): Thunk => (dispatch, getState) => {
  dispatch(pushLogDetail(log))
  if (getRightSidebarIsOpen(getState())) {
    dispatch(fetchTuplesByUid(log))
    dispatch(fetchByMd5(log))
  }
}