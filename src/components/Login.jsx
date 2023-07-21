import { Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
<Container maxW={'container.xl'} h={'100vh'} p={'16'}>

<form>
    <VStack alignItems={'stretch'}
     spacing={'8'}
      w={['full','96']}
       m={'auto'}
        my={'16'}>
        <Heading>
            Welcome back
        </Heading>

<Input placeholder='Email' type={'email'} required 
focusBorderColor={'purple.500'} />

<Input placeholder='Password' type={'password'} required 
focusBorderColor={'purple.500'} />

<Button variant={'link'} alignSelf={'flex-end'}>
    <Link to={'/forgetPassword'}>Forget Password</Link>
</Button>

<Button colorScheme={'purple'} type={'submit'}>Log in</Button>
<Text textAlign={'right'} variant={'link'}>New User?
<Button variant={'link'} colorScheme={'purple'}>
    <Link to={'/signUp'}>SignUp {"           "}</Link>
</Button>
</Text>
    </VStack>
</form>

</Container>
  )
}

export default Login
