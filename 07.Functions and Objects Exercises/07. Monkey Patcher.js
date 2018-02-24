function patch(input) {
    switch (input){
        case 'upvote':
            this.upvotes++
            break;
        case 'downvote':
            this.downvotes++
            break;
        case 'score':
            let currentUpvotes = this.upvotes
            let currentDownvoes = this.downvotes
            let rating = 'new'

            if (currentUpvotes + currentDownvoes >= 10) {
                if (currentUpvotes > 0.66 * (currentUpvotes + currentDownvoes)) {
                    rating = 'hot'
                }else if (currentDownvoes > currentUpvotes) {
                    rating = 'unpopular'
                } else if (currentUpvotes > 100 || currentDownvoes > 100) {
                    rating = 'controversial'
                }
            }

            if (currentUpvotes + currentDownvoes > 50) {
                let modifier = Math.ceil(0.25 * Math.max(currentUpvotes, currentDownvoes))
                currentUpvotes += modifier
                currentDownvoes += modifier
            }
            let score = currentUpvotes - currentDownvoes
            return [currentUpvotes, currentDownvoes, score, rating]
    }
}