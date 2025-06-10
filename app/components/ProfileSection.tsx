import Image from 'next/image';

const ProfileSection = () => {
	return (
		<div className="w-full py-8 md:py-0 bg-white dark:bg-gray-900 px-6 pt-16 sm:pt-0">
			<div className="space-y-8 text-center">
				<div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
					<div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
						<Image src="/portrait.jpg" alt="Profile" fill className="object-cover" priority />
					</div>
				</div>

				<div className="space-y-3">
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Vinay Jampana</h1>
					<h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Senior Software Engineer</h2>
					<div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4" />
					<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
						5+ years building scalable systems and leading engineering teams
					</p>
				</div>

				<div className="space-y-4">
					{/* Contact Info */}
					<div className="flex items-center justify-center space-x-2">
						<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:vinayvarma541@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
							vinayvarma541@gmail.com
						</a>
					</div>

					<div className="flex items-center justify-center space-x-2">
						<svg stroke='currentColor' className="w-5 h-5 text-gray-600 dark:text-gray-400" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z"  /></svg>
						<span className="text-sm text-gray-600 dark:text-gray-400">BITS Pilani</span>
					</div>


					<div className="flex items-center justify-center space-x-2">
						<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span style={{ display: 'flex', alignItems: 'center', gap: '2px'}} className="text-sm text-gray-600 dark:text-gray-400">Hyderabad <svg xmlns="http://www.w3.org/2000/svg" fill='none' stroke='currentColor' strokeWidth='2' width="24" height="24"><path d="m9.293 18.707 1.414-1.414L8.414 15H20v-2H3.586l5.707 5.707zM14.707 5.293l-1.414 1.414L15.586 9H4v2h16.414l-5.707-5.707z"/></svg> Bengaluru</span>
					</div>

					{/* Social Links */}
					<div className="flex items-center justify-center space-x-4 pt-2">
						<a
							href="https://github.com/vinayjampana"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
							
						</a>
						<a
							href="https://linkedin.com/in/vinay-jampana"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
