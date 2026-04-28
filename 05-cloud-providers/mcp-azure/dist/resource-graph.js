export function buildResourceGraphQuery(scope) {
    const clauses = ["Resources"];
    if (scope.resourceGroup) {
        clauses.push(`| where resourceGroup =~ '${scope.resourceGroup}'`);
    }
    if (scope.resourceType) {
        clauses.push(`| where type =~ '${scope.resourceType}'`);
    }
    clauses.push('| project name, type, location, resourceGroup');
    clauses.push('| order by name asc');
    clauses.push(`| limit ${scope.limit ?? 25}`);
    return clauses.join(' ');
}
