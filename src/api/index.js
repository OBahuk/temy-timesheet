class ClockifyAPI {
    constructor() {
        this.URL = "https://api.clockify.me/api/v1/";
        this.API_KEY = "Xq5ykfg1UW5sx57w";
        this.USER_EMAIL = "olexii.baguk@temy.co";
    }

    async autenticate() {
        this.user = await this.makeRequest("user");
        console.log(this.user);
    }

    async makeRequest(endpoint, params) {
        const response = await fetch(this.URL + endpoint, {
            ...params,
            headers: {
                "content-type": "application/json",
                "X-Api-Key": this.API_KEY
            }
        });
        return await response.json();
    }

    async getProjects() {
        return this.makeRequest(
            `/workspaces/${this.user.defaultWorkspace}/projects`
        );
    }

    async getTasks(projectID) {
        return this.makeRequest(
            `/workspaces/${this.user.defaultWorkspace}/projects/${projectID}/tasks`
        );
    }

    async postTimeEntry(projectID, taskId) {
        const request = {
            start: "2020-04-12T13:48:14.000Z",
            billable: "true",
            description: "Writing documentation",
            projectId: projectID,
            taskId: taskId,
            end: "2020-04-12T13:50:14.000Z",
            tagIds: []
        };

        return this.makeRequest(
            `/workspaces/${this.user.defaultWorkspace}/time-entries`,
            {
                method: "POST",
                body: JSON.stringify(request)
            }
        );
    }

    async getTimeEntries(date = new Date()) {
        const { defaultWorkspace, id } = this.user;
        const { firstDay, lastDay } = this.getFirstAndLastMonthDay(date);
        return this.makeRequest(
            `/workspaces/${defaultWorkspace}/user/${id}/time-entries?start=${firstDay.toISOString()}&end=${lastDay.toISOString()}`
        );
    }

    getFirstAndLastMonthDay(dateObj) {
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const firstDay = new Date(year, month, 1);
        // 0-day returns last day of previous month
        const lastDay = new Date(year, month + 1, 0);

        return { firstDay, lastDay };
    }
}

export default new ClockifyAPI();
