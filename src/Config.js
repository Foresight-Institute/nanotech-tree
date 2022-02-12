/**
 * Configuration File
 * Replace values with your information
 */

const Config = {
  title: 'Nanotech Tech Tree',
  subtitle: 'Prototype',
  key: [
    {
      title: 'Core Technology',
      color: '#9FC4FF',
    },
    {
      title: 'Nanotech Tech',
      color: '#FFC6FE',
    },
    {
      title: 'General Improvement',
      color: '#FDFFB6',
    }
  ],
  axis_enabled: false,
  axis_x: ['Example One', 'Example Two', 'Example Three'],
  axis_y: ['Example A', 'Example B', 'Example C'],
  github_repo_owner: 'Foresight-Institute',
  github_repo_name: 'nanotech-tree',
  github_base_branch: 'staging',
  github_token: process.env.REACT_APP_TOKEN,
  cover_image_url: 'https://foresight.org/wp-content/uploads/2021/12/Molecular-machines.png',
  tree_background_color: '#1D243C'
}

export default Config;