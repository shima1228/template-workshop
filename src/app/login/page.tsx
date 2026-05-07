'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    alert('登録しました。確認メールが届いている場合は確認してください。')
  }

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    alert('ログインしました')
  }

  async function logout() {
    await supabase.auth.signOut()
    alert('ログアウトしました')
  }

  return (
    <div>
      <h1>ログイン</h1>

      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signUp}>新規登録</button>
      <button onClick={login}>ログイン</button>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}