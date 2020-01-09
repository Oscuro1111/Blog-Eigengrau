import { SHOW_TRENDING_POSTS, SHOW_CONTENT_POSTS } from './actions';

const R_States = {
	Content: {
		occupiedBy: 'MainComponent',
	},
	TrendingPostsComponent: false,
	MainComponent: true,
};

export const renderState = function(state = R_States, action) {
	switch (action.type) {
		case SHOW_TRENDING_POSTS:
			return Object.assign(
				{},
				state,
				action.flag
					? {
							TrendingPostsComponent: action.flag,
							[state.Content.occupiedBy]: false,
							Content: { occupiedBy: 'TrendingPostsComponent' },
					  }
					: {
							MainComponent: true,
							[state.Content.occupiedBy]: false,
							Content: { occupiedBy: 'MainComponent' },
					  }
			);
		case SHOW_CONTENT_POSTS:
			return Object.assign({}, state, {
				MainComponent: action.flag,
				[state.Content.occupiedBy]: false,
				Content: { occupiedBy: 'MainComponent' },
			});
		default:
			return state;
	}
};
