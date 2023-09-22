'use client'

import {login} from '@/app/components/login'
import { useLoginStore } from '@/app/store/loginStore'

const loginForm = () => {
    const {mailAddress,password,setMailAddress,setPassword} 
    = useLoginStore(state => state);

    const clickHandler = () => {
        login(mailAddress,password)
    }

    return (
        <>
            <form>
                <label htmlFor="mailAddress">メールアドレス</label>
                <input type="text" id="mailAddress" value={mailAddress} onChange={e => setMailAddress(e.target.value)} />
                <label htmlFor="password">パスワード</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="button" onClick={()=>clickHandler()}>ログイン</button>
            </form>
        </>
    )

}

export default loginForm;