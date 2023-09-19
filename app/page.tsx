'use client'
import Button from '@/app/components/ui/button'
import TextBox from '@/app/components/ui/textbox'
import { AuthButton } from '@/app/components/ui/authButton'

export default function Home() {
  return (
   <>
   <Button buttonType='submit' buttonStyle='primary' >test</Button>
   <AuthButton alt='googleの認証ボタン' />
   <TextBox type='text' textboxStyle='primary' />
   </>
  )
}
