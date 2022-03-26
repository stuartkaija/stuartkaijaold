import React from 'react';
import './Projects.scss';

export default function Projects() {
  return (
		<div id='projects' className='projects'>
			<ul className='projects__list'>
				<li className='projects__list-item'>
					<a className='projects__link' href="https://github.com/stuartkaija/bubble-buddies" target='_blank' rel='noreferrer'>Bubble Buddies</a>
					<p className='projects__words'>React, Sass, Node, Express - blah blah blah</p>
				</li>
				<li className='projects__list-item'>
					<a className='projects__link' href="">WhoopWork</a>
					<p className='projects__words'>Industry hack-a-thon - with a team of two designers and two developers, ideated and brought to life a new feature for wearable fitness brand Whoop.</p>
				</li>
				<li className='projects__list-item'>
					<a className='projects__link' href="https://github.com/stuartkaija/instock" target='_blank' rel='noreferrer'>InStock</a>
					<p className='projects__words'>A warehouse inventory application created with a team of 3 other developers. Successfully utilized agile methodologies, Jira, and GitHub version control to collaborate</p>
				</li>
			</ul>
		</div>
	)
}
