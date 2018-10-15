class FollowToggle {
  constructor(el,options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();

    this.$el.on('click',this.handleClick.bind(this));
  }

  handleClick(event){
    const followToggle = this;

    event.preventDefault();

    if (this.followState === 'Followed') {
      this.followState = 'Unfollowed';
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: 'json',
        method: 'Delete',
      });
      this.render();
    }

    else {
      this.followState = 'Followed';
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: 'json',
        method: 'Post',
      });
      this.render();
    }
  }

  render() {
    if (this.followState === 'Followed') {
      this.$el.html("Unfollow!");
    }
    else if (this.followState === 'Unfollowed') {
      this.$el.html("Follow!");
    }
  }
}

module.exports = FollowToggle;
