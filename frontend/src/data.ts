import { Report } from "./app/shared/models/report";
import { Tag } from "./app/shared/models/tag";

export const sample_reports: Report[] = [
    {
        id: '1',
        title: 'Report 1',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['corruption'],
        imageUrl: 'assets/report-1.jpeg',
    },
    {
        id: '2',
        title: 'Report 2',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['politics'],
        imageUrl: 'assets/report-1.jpeg',
    },
    {
        id: '3',
        title: 'Report 3',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['abuse'],
        imageUrl: 'assets/report-1.jpeg',
    },
    {
        id: '4',
        title: 'Report 4',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['politics'],
        imageUrl: 'assets/report-1.jpeg',
    },
    {
        id: '5',
        title: 'Report 5',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['politics'],
        imageUrl: 'assets/report-1.jpeg',
    },
    {
        id: '6',
        title: 'Report 6',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['politics'],
        imageUrl: 'assets/report-1.jpeg',
    },
    {
        id: '7',
        title: 'Report 7',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum est a tincidunt cursus. Mauris quis viverra augue, vel gravida metus. Morbi fermentum ligula et leo tincidunt elementum. Aenean egestas orci at lorem ullamcorper elementum. Nulla aliquam aliquet lacus, non congue risus dignissim quis. Proin ornare neque id arcu dapibus, quis suscipit est blandit. Nam nec sem laoreet, congue ante sit amet, molestie purus. Duis et mi turpis. Donec id lorem cursus, posuere ipsum non, fermentum felis.',
        tags: ['politics'],
        imageUrl: 'assets/report-1.jpeg',
    },
]

export const sample_tags:Tag[] = [
    { name: 'All'},
    { name: 'corruption'},
    { name: 'politics'},
    { name: 'abuse'}
]
