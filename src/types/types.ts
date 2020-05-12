export interface TimeEntry {
    billable: boolean
    customFieldValues: null
    description: string
    id: string
    isLocked: boolean
    projectId: string
    tagIds: []
    taskId: string
    timeInterval: {
        start: string,
        end: string,
        duration: string}
    userId: string
    workspaceId: string
}
