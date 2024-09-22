import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { lightTheme, darkTheme } from './theme/theme';
import Button from './components/Button/Button';
import { MoonIcon, SunIcon, ArrowLeftIcon, ArrowRightIcon, PlusIcon, CalendarIcon, PencilIcon, GiftIcon } from '@heroicons/react/24/outline';
import IconButton from './components/Button/IconButton';

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const handleClick = () => {
    alert('Button was clicked');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>

      <GlobalStyle />
      <div className="App">
      <div style={{ padding:'24px 24px', display:'flex', flexDirection:'column', gap:'24px' }}>
        <IconButton style={{ position: 'absolute', top: '24px', right: '24px' }} variant='Secondary' size='Large' icon={isDarkTheme ? SunIcon : MoonIcon} onClick={toggleTheme} />
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Large' label='Button' onClick={handleClick}/>
          <Button variant='Secondary' size='Large' label='Button' onClick={handleClick}/>
          <Button variant='Tertiary' size='Large' label='Button' onClick={handleClick}/>  
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Large' label='Button' disabled onClick={handleClick}/>
          <Button variant='Secondary' size='Large' label='Button' disabled onClick={handleClick}/>
          <Button variant='Tertiary' size='Large' label='Button' disabled onClick={handleClick}/>  
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Medium' label='Button' onClick={handleClick}/>
          <Button variant='Secondary' size='Medium' label='Button' onClick={handleClick}/>
          <Button variant='Tertiary' size='Medium' label='Button' onClick={handleClick}/>  
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Medium' label='Button' disabled onClick={handleClick}/>
          <Button variant='Secondary' size='Medium' label='Button' disabled onClick={handleClick}/>
          <Button variant='Tertiary' size='Medium' label='Button' disabled onClick={handleClick}/>  
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <Button variant='Primary' size='Large' label='Button' stretch={true} onClick={handleClick}/>
          <Button variant='Secondary' size='Large' label='Button' stretch={true} onClick={handleClick}/>
          <Button variant='Tertiary' size='Large' label='Button' stretch={true} onClick={handleClick}/>
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Large' label='Button' stretch={true} onClick={handleClick}/>
          <Button variant='Secondary' size='Large' label='Button' stretch={true} onClick={handleClick}/>
          <Button variant='Tertiary' size='Large' label='Button' stretch={true} onClick={handleClick}/>
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Large' label='Button' leadingIcon={ArrowLeftIcon} trailingIcon={ArrowRightIcon} onClick={handleClick}/>
          <Button variant='Secondary' size='Large' label='Button' leadingIcon={ArrowLeftIcon} trailingIcon={ArrowRightIcon} onClick={handleClick}/>
          <Button variant='Tertiary' size='Large' label='Button' leadingIcon={ArrowLeftIcon} trailingIcon={ArrowRightIcon} onClick={handleClick}/>  
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <Button variant='Primary' size='Medium' label='Button' leadingIcon={ArrowLeftIcon} trailingIcon={ArrowRightIcon} onClick={handleClick}/>
          <Button variant='Secondary' size='Medium' label='Button' leadingIcon={ArrowLeftIcon} trailingIcon={ArrowRightIcon} onClick={handleClick}/>
          <Button variant='Tertiary' size='Medium' label='Button' leadingIcon={ArrowLeftIcon} trailingIcon={ArrowRightIcon} onClick={handleClick}/>  
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <IconButton variant="Primary" size="Large" icon={CalendarIcon} onClick={handleClick}/>
          <IconButton variant="Secondary" size="Large" icon={PencilIcon} onClick={handleClick}/>
          <IconButton variant="Tertiary" size="Large" icon={GiftIcon} onClick={handleClick}/>
        </div>
        <div style={{ display:'flex', flexDirection:'row', gap:'16px' }}>
          <IconButton variant="Primary" size="Medium" icon={CalendarIcon} onClick={handleClick}/>
          <IconButton variant="Secondary" size="Medium" icon={PencilIcon} onClick={handleClick}/>
          <IconButton variant="Tertiary" size="Medium" icon={GiftIcon} onClick={handleClick}/>
        </div>
      </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
