import React from 'react';
import './blue-screen.scss';

export default function BlueScreen() {
  return (
    <div className='blue-screen'>
      <div className='blue-screen__message'>
        <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p><br />
        <p>A process or thread crucial to system operation has unexpectedly exited or been terminated.</p>
        <p>If this is the first time you've seen this Stop error screen, refresh your computer. If these steps appear again, follow these steps:</p>
        <p>Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any windows updates you might need.</p>
        <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then Select Safe Mode.</p>
        <p>If all else fails, you might need an expert. Consider sending an email over as nsekreter@gmail.com to get in contact with an expert.</p>
        <p>Technical Information:</p>
        <p>OH NOOO!!!!! YOU TOTALLY GOT HACKED!!!!!11!!!!1!! It's a real shame this isn't a browser you can just refresh. No that'd be impossible. Anyways enjoy your totally bricked computer :)</p>
      </div>
    </div>
  );
}
