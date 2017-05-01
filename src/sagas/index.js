import {forkSpawnExampleMain} from './forkSpawnExample'
import {runNonBlockingCallsExample} from './nonBlockingCalls'
import {runBlockingCallsExample} from './blockingCalls'
import {getUsersTakeEvery, getUsersTakeLatest, getUsersThrottle} from './sagaHelpers'
import {runParallelCallsExample} from './parallel'

export default function* rootSaga() {
  yield [forkSpawnExampleMain(),
    runNonBlockingCallsExample(),
    runBlockingCallsExample(),
    getUsersTakeLatest(),
    getUsersTakeEvery(),
    getUsersThrottle(),
    runParallelCallsExample()
  ]
}

